import './CodeSample.css'


export default function CodeSample({code=""})
{

  const codeBlock = code.split("\n");
  const codeLines = codeBlock.map(item => `<pre>${item}</pre>`).join("");

  return<>
  <div className="CodeSample">
    <div className='code-block' dangerouslySetInnerHTML={{__html: codeLines}}/>
  </div>
  </>
}