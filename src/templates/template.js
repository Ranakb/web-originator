import React from 'react';
import './template.css'
const Template = () => {
  return <>
        <div className="SubmitButtondiv">
            <button className="SubmitButton">Submit</button>
        </div>
        <div>
     
            <div className="top-image">
            <div className='navBar'>
            <nav>
        <h1 contentEditable="true">Website name</h1>
            <ul>
                <li>Articles</li>
                <li>Contact</li>
                <li>About Us</li>
                
            </ul>
        </nav>
        </div>
            <img src='/images/template1.jpg' height="600px" width="100%"  > 
            </img>
      <div className='after_image'>
      <h1 contentEditable="true">Your Heading</h1> 
     <p contentEditable="true">One of the most recognizable things about good web design is that they know how to make text stand out with any background.

However, there are many challenges when trying to create text that stands out against backgrounds. The biggest challenge is choosing the right colors.

NOTE
Choosing colors can be tricky because you don't want your text to blend in with your background. But at the same time, you also don't want them to look like they belong together.

Choosing the right colors is the first step of making the text stand out. But additionally, we can apply additional CSS magic to make the text stand out even more.

In this section, we're gonna look at some techniques, which can be applied to make the text stand out on any background.


The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color. (source: MDN)

We're gonna apply the following CSS property to our text element. Notice how it makes the text stand out.</p>
<button contentEditable="true" className='template_btn'> CLICK</button>
      </div>
            </div>
        </div>

  </>;
};

export default Template;
