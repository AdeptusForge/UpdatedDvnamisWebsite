import '../components/OverlayWindow.css'

import { type ReactNode} from "react";
import * as motion from "motion/react-client"

import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import CodeSample from './CodeSample';



const projectileCode =`   
 //Used in Behavior Tree
    float? LobAngle(float x, float y, float v0, float g)
    {
        float root = Mathf.Pow(v0, 4) - g * (g * Mathf.Pow(x, 2) + 2.0f * y * Mathf.Pow(v0, 2));
        if (root < 0.0f)
        {
            return null;
        }
        root = Mathf.Sqrt(root);
        float angle = Mathf.Atan((v0 * v0 + root) / (g * x));
        return angle;
    }
    //Used in Behavior Tree
    float? OptimalAngle(float x, float y, float v0, float g)
    {
        float root = Mathf.Pow(v0, 4) - g * (g * Mathf.Pow(x, 2) + 2.0f * y * Mathf.Pow(v0, 2));
        if (root < 0.0f)
        {
            return null;
        }
        root = Mathf.Sqrt(root);
        float angle = Mathf.Atan((Mathf.Pow(v0, 2) - root) / (g * x));
        return angle;
    }
    //Used in Behavior Tree
    float travelEstimate(float xDist, float angle, float v0)
    {
        return xDist / (Mathf.Cos(angle) * v0);
    }
  
  
    Vector3 PredictPlayer(float predictionTime)
    {
        CharacterBody3D player = (CharacterBody3D)Blackboard.GetVar("player");
        Vector3 playerPos = player.GlobalPosition;
        Vector3 playerVel = player.Velocity;
        bool floor = player.IsOnFloor();
        float y;
        float x = playerPos.X + playerVel.X * predictionTime;
        float z = playerPos.Z + playerVel.Z * predictionTime;
        if (floor) //Player is grounded
        {
            y = playerPos.Y;
        }
        else //Player is not grounded
        {
            Vector3 playerGrav = player.GetGravity() with { Y = -60f };
            y = playerPos.Y + ((playerVel.Y * predictionTime) + (0.5f * playerGrav.Y * predictionTime * predictionTime));
  
            float verticalDifference = y - playerPos.Y;
            Vector3 groundCheckPos = new Vector3(x, playerPos.Y, z);
  
            var shotTarget = groundCheckPos + new Vector3(0, verticalDifference, 0);
            Dictionary hit = CastRay(groundCheckPos, shotTarget);
            if (hit.Count > 0)
            {
                Vector3 collisionPoint = (Vector3)hit["position"];
                if (verticalDifference > 0) // player went up, check needed
                    y = collisionPoint.Y - 1f;
                else if (verticalDifference < 0) //player went down, check needed
                    y = collisionPoint.Y + 1f;
            }
        }
  
        return new Vector3(x, y, z);
    }`

const triplanarCode=`shader_type spatial;
 
const float detile_multiple = 0.5;

uniform vec3 blending_coefficient = vec3(1.0);
uniform sampler2D base_texture: source_color, repeat_enable;
uniform sampler2D detiling_noise: source_color, repeat_enable;
uniform vec2 base_texture_scaling = vec2(1.0,1.0);
uniform float triplane_alpha = 1.0;
 
group_uniforms X_Axis;
uniform bool axis_x_active = true;
uniform bool axis_x_swizzle = false;
uniform float axis_x_detiling = 0.0;
uniform vec2 axis_x_dualsided = vec2(1.0);
uniform sampler2D texture_x : repeat_enable, source_color;
uniform vec2 texture_scaling_x = vec2(1.0,1.0);
uniform vec2 texture_offset_x;
uniform vec4 tint_x: source_color = vec4(1.0);
group_uniforms;
 
group_uniforms Y_Axis;
uniform bool axis_y_active = true;
uniform bool axis_y_swizzle = false;
uniform float axis_y_detiling = 0.0;
uniform vec2 axis_y_dualsided = vec2(1.0);
uniform sampler2D texture_y : repeat_enable, source_color;
uniform vec2 texture_scaling_y = vec2(1.0,1.0);
uniform vec2 texture_offset_y;
uniform vec4 tint_y: source_color = vec4(1.0);
group_uniforms;
 
group_uniforms Z_Axis;
uniform bool axis_z_active = true;
uniform bool axis_z_swizzle = false;
uniform float axis_z_detiling = 0.0;
uniform vec2 axis_z_dualsided = vec2(1.0);
uniform sampler2D texture_z : repeat_enable, source_color;
uniform vec2 texture_scaling_z = vec2(1.0,1.0);
uniform vec2 texture_offset_z;
uniform vec4 tint_z: source_color = vec4(1.0);
group_uniforms;
 
void fragment() {
	vec4 vertex = INV_VIEW_MATRIX * vec4(VERTEX, 1.0);
	vec3 normal = normalize((INV_VIEW_MATRIX * vec4(NORMAL, 0.0)).xyz);
	vec3 adjustedNormal = pow(abs(normal), blending_coefficient);
	vec3 weights = (adjustedNormal / (adjustedNormal.x + adjustedNormal.y + adjustedNormal.z)) * 3.0;
	
	vec2 vert_x = (axis_x_swizzle ? vertex.yz : vertex.zy);
	vec2 vert_y = (axis_y_swizzle ? vertex.xz : vertex.zx);
	vec2 vert_z = (axis_z_swizzle ? vertex.xy : vertex.yx);
	
	vec2 uv_x = (vert_x) * texture_scaling_x + texture_offset_x;
	vec2 uv_y = (vert_y) * texture_scaling_y + texture_offset_y; 
	vec2 uv_z = (vert_z) * texture_scaling_z + texture_offset_z; 
	
	float x_detile = texture(detiling_noise, vert_x).r * axis_x_detiling * detile_multiple / length(texture_scaling_x);
	float y_detile = texture(detiling_noise, vert_y).r * axis_y_detiling * detile_multiple  / length(texture_scaling_y);
	float z_detile = texture(detiling_noise, vert_z).r * axis_z_detiling * detile_multiple  / length(texture_scaling_z);
	
	vec3 color_x = texture(texture_x, uv_x + vec2(-sin(x_detile), -sin(x_detile))).rgb * weights.x * tint_x.rgb * float(axis_x_active);
	vec3 color_y = texture(texture_y, uv_y + y_detile).rgb * weights.y * tint_y.rgb * float(axis_y_active);
	vec3 color_z = texture(texture_z, uv_z + z_detile).rgb * weights.z * tint_z.rgb * float(axis_z_active);
	vec3 colorAverage = (color_x + color_y + color_z) / 3.0;

	//float colorDistance_x = distance(color_x, colorAverage);
	//float colorDistance_y = distance(color_y, colorAverage);
	//float colorDistance_z = distance(color_z, colorAverage);
	//
	//float min_distance = min(colorDistance_x, colorDistance_y);
	//min_distance = min(min_distance, colorDistance_z);

	vec3 closest_color = colorAverage;

	ALBEDO = mix(texture(base_texture, UV * base_texture_scaling), vec4(closest_color, 1.0), triplane_alpha).rgb;
	NORMAL_MAP = mix(texture(base_texture, UV * base_texture_scaling), vec4(closest_color, 1.0), triplane_alpha).rgb;
}
`
const channelsCode =`  
using system; 
    protected float CurveChange()
    {
        float timeDivisor = Time.deltaTime / duration;
        float currentDurDivisor = currentDuration / duration;
        float val;
        if (reversed == false) 
            val = (curve.Evaluate(currentDurDivisor) - curve.Evaluate((currentDurDivisor - timeDivisor)));
            
        else
            val = (curve.Evaluate(currentDurDivisor) - curve.Evaluate((currentDuration + timeDivisor)));
        
        return val;
    }
        `


interface Dict
{
  [key: string] : any;
  projectile: string;
  triplanar:string;
  channels:string;
}

const codeDict : Dict = 
{
  projectile:projectileCode,
  triplanar:triplanarCode,
  channels:channelsCode,
}

/**
 * Converts a ReactNode into a native browser DOM Node
 */
export function reactNodeToDOMNode(reactNode: ReactNode): Node {
  // 1. Create a detached DOM element container
  const container = document.createElement('div');
  const root = createRoot(container);

  // 2. Force React to render the node synchronously
  flushSync(() => {
    root.render(reactNode);
  });

  // 3. Extract and return the underlying native DOM node(s)
  // If the ReactNode rendered a single element, return it.
  // Otherwise, return the container itself or its child nodes.
  return container.firstChild || container;
}


interface Target{
  targetID: string
  children?: ReactNode
}

function OpenOverlay(targetID:string)
{
  const w = document.getElementById("overlaywindow");
  const button = document.getElementById("overlayClose");
  var subw = document.getElementById("suboverlaywindow");
  if(w != null && subw != null && button != null)
  {
    button.style.display = "block";
    w.style.display = "block";
    subw.focus();
    if(targetID.endsWith("code"))
    {
      const keyv : keyof Dict = targetID.split("_")[0];
      //console.log(keyv);
      var resultCode :string = codeDict[keyv];
      subw.replaceChildren(reactNodeToDOMNode(<CodeSample code ={resultCode}/>));
    }
    else
    {
      const target = document.getElementById(targetID);
      if(target != null)
      {

        const windowcontent = target.cloneNode(true);
        subw.replaceChildren(windowcontent)
      }
    }


  }




}
function CloseOverlay()
{
  const w = document.getElementById("overlaywindow");
  const button = document.getElementById("overlayClose");

  if(w != null && button != null)
  {
    w.style.display = "none";
    button.style.display = "none";
  }
}

export default function OverlayWindow()
{
  
  return(
    <div>
    <div className="OverlayWindow" id="overlaywindow">
          <div className="ContentHolder" id="suboverlaywindow"></div>
        </div>
      <button className="OutsideOverlay" id ="overlayClose" onClick={()=> CloseOverlay()}>
    </button>
    </div>

)
}

export function OverlayTarget({targetID, children}:Target)
{
  return(
    <motion.button className="OverlayTargetButton" onClick={() => OpenOverlay(targetID)}>

      <div className="TargetContent" id ={targetID}>
              {children}
      </div>
      <div className="OverlayButtonText">
      expand
      </div>
    </motion.button>
  )
}