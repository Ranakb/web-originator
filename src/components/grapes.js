import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import grapesjs from 'grapesjs';

import Template from '../templates/template';

import 'grapesjs/dist/css/grapes.min.css';
import './Grapes.css';
import '../templates/template.css';

// import "./grapes.min.css";
// import "./grapesjs.preset-webpage.min.css"
// import gjsPresetWebpage from 'grapesjs-preset-webpage'
// import gjsBlocksBasic from 'grapesjs-preset-webpage'
// import grapesjsCustomBlocks from 'grapesjs-custom-blocks'
const svgLink = `<svg style="width:78px;height:78px" viewBox="0 0 24 20">
<path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
</svg>`;
const svgText = `<svg style="width:78px;height:78px" viewBox="0 0 24 24">
<path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
</svg>`;
const svgSection = `<svg  viewBox="-3 -3 20 20" xmlns="http://www.w3.org/2000/svg" width="78" height="78" fill="currentColor" class="bi bi-menu-button-wide-fill" >
<path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>>`;
const svgImage = `<svg viewBox="0 3 16 10" xmlns="http://www.w3.org/2000/svg" width="78" height="78" fill="currentColor" class="bi bi-images" >
<path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
<path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
</svg>`;
const svgInput = `<svg viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" width="78" height="78" fill="currentColor" class="bi bi-input-cursor-text" >
<path fill-rule="evenodd" d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2z"/>
<path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z"/>
</svg>`;
const svgNav = `<svg viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" width="78" height="78" fill="currentColor" class="bi bi-segmented-nav" >
<path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z"/>
</svg>`;
const svgMobile = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="mobile" width="30" height="30"  fill="currentColor" class="bi bi-phone" >
<path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
<path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>`;
const svgDesktop = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
<path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
</svg>`;
const svgColm = `<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" fill="currentColor" class="bi bi-layout-three-columns" viewBox="0 0 16 16">
<path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11v14z"/>
</svg>`;
const svgTwoCol = `<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" fill="currentColor" class="bi bi-layout-split" viewBox="0 0 16 16">
<path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2z"/>
</svg>`;
let em;
const Dropdown = () => {
  const [editor, seteditor] = useState(null);
  const params = useParams();
  useEffect(() => {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',

      // plugins: [gjsBlocksBasic],
      // pluginsOpts: {
      //   gjsBlocksBasic: {
      //     // options
      //   }
      // },

      fromElement: true,
      height: '100vh',
      width: '98%',
      storageManager: false,
      panels: { defaults: [] },
      //  ******* inial config first step end ********

      //    ********* Block added second step *******
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', // id is mandatory
            // label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class: 'gjs-block-section' },
            media: svgSection,
            content: `<section>
                  <h1 >This is a simple title</h1>
                  <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                </section>`,
            dropable: true,
          },
          {
            id: 'text',
            // label: 'Text',
            media: svgText,
            // attributes :{class:'section'}, // tochange apperance of icon
            content: '<div data-gjs-type="text">Insert your text here</div>',
            dropable: true,
            class: 'section',
          },
          {
            id: 'image',
            // label: 'Image',

            media: svgImage,
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          },
          {
            id: 'input',
            // label: 'Input',
            media: svgInput,
            dragable: true,
            dropable: true,
            // attributes :{class:'section'}, // tochange apperance of icon
            content: '<input/>',
            dropable: true,
            class: 'section',
          },
          {
            id: 'nav',
            // label: 'Nav',
            media: svgNav,
            // attributes :{class:'section'}, // tochange apperance of icon
            content: `
            
            <nav>
            
            <ul class="nav">
            <h1>Brand Name</h1>
            <li class=nav-li>Home</li>
            <li class=nav-li>About</li>
            <li class=nav-li>Contact</li>
            </ul>
            </nav> 
            <style> .nav {list-style-type:none;margin-top:-10px;display:flex;background-color:black;color:white}
            .nav-li {margin-left:80px;font-size:25px}</style>`,

            dropable: true,
            class: 'section',
          },
          {
            id: 'link',
            // label:<BiLink/>,
            media: svgLink,
            // attributes :{class:'section'}, // tochange apperance of icon
            content: '<a href="">Link</a>',
            dropable: true,
            class: 'link',
          },
          {
            id: 'grid',
            // label:<BiLink/>,
            media: svgColm,
            // attributes :{class:'section'}, // tochange apperance of icon
            content: `<div class=grid>
            <div class=first><div>
            <div class=second><div>
            <div class=third><div>
            <div> <style> .grid {display:grid;  grid-template-columns: 350px 350px 350px; height:300px}
           
           </style>`,
            dropable: true,
            class: 'grid',
          },
          {
            id: 'grid-two',
            // label:<BiLink/>,
            media: svgTwoCol,
            // attributes :{class:'section'}, // tochange apperance of icon
            content: `<div class=grid-two>
            <div class=first>first<div>
            <div class=second>second<div>
            <div> <style> .grid-two {display:grid;  grid-template-columns: 535px 535px;  height:300px}
           
           </style>`,
            dropable: true,
            class: 'grid-two',
          },
          {
            id: 'grid-two',
            // label:<BiLink/>,
            media: svgTwoCol,
            // attributes :{class:'section'}, // tochange apperance of icon
            content: ``,
            dropable: true,
            class: 'grid-two',
          },
        ],
      },

      layerManager: {
        appendTo: '.layers-container',
      },
      // We define a default panel as a sidebar to contain layers
      panels: {
        defaults: [
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-blocks',
                active: true,
                label: 'Blocks',
                command: 'show-blocks',
                togglable: false,
              },
              {
                id: 'show-layers',
                active: true,
                label: 'Layers',
                command: 'show-layers',
                // Once activated disable the possibility to turn it off
                togglable: false,
              },
              {
                id: 'show-style',
                active: true,
                label: 'Styles',
                command: 'show-styles',
                togglable: false,
              },
              {
                id: 'show-traits',
                active: false,
                label: 'Classes',
                command: 'show-traits',
                togglable: false,
              },
            ],
          },
          {
            id: 'layers',
            el: '.panel__right',
            // Make the panel resizable
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0, // Top handler
              cl: 1, // Left handler
              cr: 0, // Right handler
              bc: 0, // Bottom handler
              // Being a flex child we need to change `flex-basis` property
              // instead of the `width` (default)
              keyWidth: 'flex-basis',
            },
          },
        ],
      },
      selectorManager: {
        appendTo: '.styles-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: [
              'width',
              'min-height',
              'padding',
              'margin',
              'position',
              'display',
            ],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px', '%'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0, // Min value, available only for 'integer' types
              },
            ],
          },
          {
            name: 'Extra',
            open: false,
            buildProps: [
              'background-color',
              'color',
              'box-shadow',
              'custom-prop',
            ],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
              },
            ],
          },
          {
            name: 'position',
            open: false,
            buildProps: ['top', 'right', 'left', 'bottom'],
            properties: [
              {
                id: 'custom-prop',
                name: ' Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
              },
            ],
          },
        ],
      },
      traitManager: {
        appendTo: '.traits-container',
      },

      deviceManager: {
        devices: [
          {
            name: 'Desktop',
            width: '', // default size
          },
          {
            name: 'Mobile',
            width: '320px', // this value will be used on canvas width
            widthMedia: '480px', // this value will be used in CSS @media
          },
        ],
      },
    });

    editor.DomComponents.addType('input', {
      isComponent: (el) => el.tagName == 'INPUT',
      model: {
        defaults: {
          traits: [
            // Strings are automatically converted to text types
            'name', // Same as: { type: 'text', name: 'name' }
            'placeholder',
            {
              type: 'select', // Type of the trait
              label: 'Type', // The label you will see in Settings
              name: 'type', // The name of the attribute/property to use on component
              options: [
                { id: 'text', name: 'Text' },
                { id: 'email', name: 'Email' },
                { id: 'password', name: 'Password' },
                { id: 'number', name: 'Number' },
              ],
            },
            {
              type: 'checkbox',
              name: 'required',
            },
          ],

          // As by default, traits are binded to attributes, so to define
          // their initial value we can use attributes
          attributes: { type: 'text', required: true },
        },
      },
    });

    // ************* adding Export btns third step **********
    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        },
        {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',

          context: 'export-template', // For grouping context of buttons from the same panel
        },
        {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(
                `<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`
              )
              .open();
          },
        },
        {
          id: 'device-desktop',
          label: svgDesktop,
          command: 'set-device-desktop',
          active: true,
          togglable: false,
        },
        {
          id: 'device-mobile',
          label: svgMobile,
          command: 'set-device-mobile',
          togglable: false,
        },
      ],
    });
    editor.Commands.add('set-device-desktop', {
      run: (editor) => editor.setDevice('Desktop'),
    });
    editor.Commands.add('set-device-mobile', {
      run: (editor) => editor.setDevice('Mobile'),
    });

    // **************** commands of layer btns ************
    editor.Commands.add('show-layers', {
      getRowEl(editor) {
        return editor.getContainer().closest('.editor-row');
      },
      getLayersEl(row) {
        return row.querySelector('.layers-container');
      },

      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });

    //   ********* commands od Style btn ***********
    editor.Commands.add('show-styles', {
      getRowEl(editor) {
        return editor.getContainer().closest('.editor-row');
      },
      getStyleEl(row) {
        return row.querySelector('.styles-container');
      },

      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });

    // ******************* block *****************
    editor.Commands.add('show-blocks', {
      getRowEl(editor) {
        return editor.getContainer().closest('.editor-row');
      },
      getBlocksEl(row) {
        return row.querySelector('#blocks');
      },

      run(editor, sender) {
        const smEl = this.getBlocksEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getBlocksEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });
    //   ************** comands of trait/classes ***************
    editor.Commands.add('show-traits', {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.traits-container');
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });

    seteditor(editor);
  }, []);

  const getTemplate = () => {
    switch (params?.templateName) {
      case 'dummy':
        return <Template />;
      case 'empty':
        return 'Create New Website...';
      default:
        return 'Create New Website...';
    }
  };

  return (
    <>
      <div class='panel__top'>
        <div class='panel__basic-actions'></div>

        <div class='panel__devices'>
          <h1 className='main-name'>Web Originator</h1>
        </div>
        <div class='panel__switcher'></div>
      </div>

      <div class='editor-row'>
        <div class='editor-canvas'>
          <div id='gjs'>{getTemplate()}</div>
        </div>
        <div class='panel__right'>
          <div class='layers-container'></div>
          <div class='styles-container'></div>
          <div class='traits-container'></div>
          <div id='blocks'></div>
          {/* <div class="blocks"></div> */}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
