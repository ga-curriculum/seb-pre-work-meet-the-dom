<textarea id="source">

<h1 class="slide-header">Meet the DOM</h1>

<span id=time-estimate class="color-grey-500">60 mins</span>

<p id="lesson-description">
  It’s now time to tie together our HTML, CSS, and JavaScript knowledge by using the Document Object Model (DOM) to manipulate a webpage. Most of the real-time interactions you see on a webpage are made possible by the DOM. Let’s make some magic!
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

What is the DOM?

<hr>

Accessing Elements in the DOM

<hr>

Adding Elements Using the DOM

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/meet-the-dom-af5130.pdf" target="_blank" download="meet_the_dom_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Explain how the DOM works.</li>
  <li>Find and read information from HTML elements using JavaScript.</li>
  <li>Update or remove HTML elements from the webpage.</li>
  <li>Create and add new HTML elements to the webpage.</li>
</ul>

---

<h1 class="slide-header">Intro to the DOM</h1>

The DOM, or **Document Object Model**, is an interface that allows JavaScript to access HTML elements on a webpage to alter their structure, style, and content. Let’s break it down.

**Document:** The document is the webpage — typically the HTML document.

**Object:** Every HTML element — `<head>`, `<body>`, or `<p>` — is an object. Because they’re objects, we can use methods and properties to change, delete, and add to them.

**Model:** The model describes how the objects are laid out, often in a hierarchical tree. We call this the “DOM tree,” shown below. (You might see the terms “node,” “object,” or “element” all used interchangeably when referring to parts of the DOM.)

![](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-11/Slide-17-DOM-Tree-Annotated.svg)

---

<h1 class="slide-header">What Does the DOM Do?</h1>

The DOM powers a lot of the everyday interactions on webpages with which you might be familiar. Its four core capabilities are to:

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/dom.png)

In this lesson, we’ll focus on getting and setting content with the DOM. In the next lesson, we’ll explore how event listeners work.

---

<h1 class="slide-header">Getting Content from the DOM</h1>

The DOM allows you to **get** elements and content from a webpage.
 * It makes it easy to access content within a page; for example, when you want to find out what information a user has entered into a form field.
 * This information could include email addresses, first and last names, and more.

![](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-11/Slide-6-Form-Email.svg)

---

<h1 class="slide-header">Set Content</h1>

The DOM allows you to **set** content on the page.
 * With the DOM, we can dynamically update the content of the HTML elements on our page.
 * Maybe we want to change the text of the `<h1>` on the site, or perhaps we want to update the `src` attribute of an image when the user clicks a button. We can dynamically update any of the HTML, text content, or attributes of the elements on our page.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/website-H1-src-attribute.png)

---

<h1 class="slide-header">Adding Effects</h1>

The DOM allows you to add effects and animations to a webpage.
 * Maybe we want a dropdown menu to expand when a user clicks on an icon. Or maybe we want a “Success” message to fade in when our user submits a form. Perhaps we want different images to fade in and out as a user scrolls down a page.
 * All of this is possible with JavaScript.

![](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-11/Slide-7-Sidebar.svg)

---

<h1 class="slide-header">Create Event Listeners</h1>

The DOM allows you to create **event listeners**.
 * We don’t always want the final state of our webpage to be the same as its initial state. Rather, it should respond to a user’s behavior on the page.
 * JavaScript allows us to react to a user’s actions by having the DOM “listen” or “wait” for a user to take action before we run a block of code.
 * For example, maybe we want a button to change color after the user clicks it. To do so, we’d attach an event listener to the button that’s triggered by a click.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/website-event-listener-button.png)

---

<h1 class="slide-header">The Good Kind of Manipulation</h1>

To make all those cool interactions happen, developers will **manipulate the DOM** to change, add, or store information from the webpage. 

At a high level, DOM manipulation is a two-step process:
1. First, you have to **find and select the HTML element** with which you want to work.
2. Once you’ve found the element, you can **manipulate (access, update, or remove)** it as you wish.

Think of the DOM like a claw machine at an arcade. To interact with parts of the webpage using JavaScript, you must first reach in and grab them. Then, you can change them however you’d like.

Let’s start with Step 1: finding elements.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/DOM-arcade-claw.png)

---

<h1 class="slide-header">Finding DOM Elements</h1>

The first thing you have to do when working with the DOM is tell JavaScript what you’re looking for. Because HTML and JavaScript don’t talk directly to each other, you have to use special DOM methods to select the element you want to manipulate. You’re basically telling the DOM, “Go check out where this element is because we're probably doing something with it in a bit.” (You’ll also hear this referred to as “grabbing” elements in the DOM.)

There are many methods for selecting specific DOM elements, but we’ll keep things simple by using these two:
* `document.querySelector()`: Finds the first matching element.
* `document.querySelectorAll()`: Finds all matching elements.

The `document` written before the query is telling JavaScript to check out the HTML page (aka, the document). Information about the specific element you want to grab goes inside of the `()`. Let’s look at that next.

---

<h1 class="slide-header">Knowledge Check</h1>

`document.querySelector()` and `document.querySelectorAll()` find DOM elements using a format that should be familiar: CSS selector syntax.

Let’s do a quick refresher: Which of the following statements about CSS selectors are **true**?

<fieldset>
    <legend>Please select all that apply</legend>
<input type='checkbox' id='answer1' value='answer1' /><label for='answer1'># indicates a class</label><br />
<input type='checkbox' id='answer2' value='answer2' correct='true' /><label for='answer2'>. indicates a class</label><br />
<input type='checkbox' id='answer3' value='answer3' correct='true' /><label for='answer3'># indicates an ID</label><br />
<input type='checkbox' id='answer4' value='answer4' /><label for='answer4'>. indicates an ID</label><br />
</fieldset>
<button class='ant-btn ant-btn-primary multiple-choice-radio-submit'>Submit Answer</button>

---

<h1 class="slide-header">Query Selectors</h1>

Take a look at how we’d write methods for finding elements in the DOM:

| Example | Functionality |
| -------- | -------- |
| `document.querySelector('p')`   | Grabs the first `<p>` in the document.     |
| `document.querySelector('.magic')`    | Grabs the first element with the class `"magic"` in the document.     |
| `document.querySelector('#hero')`    | Grabs the first element with an ID of `"hero"` in the document.     |
| `document.querySelector('.magic p')`    | Grabs the first `<p>` inside an element with the class `"magic"`.     |

`document.querySelectorAll` works in basically the same way, except it will grab ALL of the elements that match the query.

---

<h1 class="slide-header">Knowledge Check</h1>

Take a look at the following code snippet. How would we grab the element with the class `complete`?

```html
<h2>To-Do List</h2>
<ul>
	<li id = "special">Feed the cat.</li>
	<li class = "complete">Take out the trash.</li>
	<li>Mow the lawn.</li>
</ul>
```

<fieldset>
    <legend>Please select one of the following</legend>
<input type='radio' name='answers' id='answer1' value='answer1' /><label for='answer1'>document.querySelector(complete);</label><br />
<input type='radio' name='answers' id='answer2' value='answer2' /><label for='answer2'>querySelector('.complete');</label><br />
<input type='radio' name='answers' id='answer3' value='answer3' /><label for='answer3'>document.querySelector = '.complete';</label><br />
<input type='radio' name='answers' id='answer4' value='answer4' correct='true' /><label for='answer4'>document.querySelector('.complete');</label><br />
</fieldset>
<button class='ant-btn ant-btn-primary multiple-choice-radio-submit'>Submit Answer</button>

---

<h1 class="slide-header">QuerySelector Practice</h1>

Ready to get some `querySelector()` practice?

Fill in the correct arguments in the `querySelector()` methods to grab the requested HTML elements. We’ve provided some `console.log()`  statements to confirm that you’ve correctly accessed the elements.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="QuerySelector Practice" src="https://codepen.io/GAmarketing/embed/zYXombN?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/zYXombN">
  QuerySelector Practice</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Manipulating the DOM</h1>

Once you’ve grabbed an element from the DOM, you can access it, update it, and more.

You can do many things with a DOM element. The table below lists a few of the most common ones. 

| Property Name| Functionality | Example | 
| -------- | -------- | ----- |
| `element.innerHTML`    | Returns or sets the HTML content of the element.    | `document.querySelector('h2').innerHTML = 'Hello there!';` updates the `<h2>` to read “Hello there!”. |
| `element.style`    | Returns or sets the style attributes of the element.   | `document.querySelector('h2').style.color = 'blue';` changes the color of the `<h2>` to blue. |
| `element.className` | Sets the class of the element. | `document.querySelector('h2').className = 'complete';` changes the class of the `<h2>` to `complete`. |
| `element.parentNode`    | Returns the parent, or containing element, of the requested element.     | `document.querySelector('h2').parentNode;` returns the parent element of the `<h2>`. |
| `element.childNodes` | Returns all of the child nodes that an element contains. | `document.querySelector('h2').childNodes;` returns the child nodes of the `<h2>`. |

---

<h1 class="slide-header">Knowledge Check</h1>

Given this HTML:

```html
<h1>Visit my site</h1>
```

How would you update it to read like this?
```html
<h1>Visit my <a href='http://www.coolsite.net'>site</a></h1>
```

(Hint: Use the `innerHTML` property for this.)

<details>
  <summary>Reveal Answer</summary>
  Here’s how you could update this text using the DOM. You’d use the `innerHTML` property to update the entire text content of the `<h1>`.

    `document.querySelector('h1').innerHTML = "Visit my <a href='http://www.coolsite.net'>site</a>";`
</details>

---

<h1 class="slide-header">Getting, Setting, and Removing Attributes</h1>

There are methods for DOM elements that can be used to get, update, or remove properties. An especially useful trio of methods is `getAttribute()`, `setAttribute()`, and `removeAttribute()`, which can read or write any HTML attribute of a DOM element. Let’s take a look:

```javascript
const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.

document.querySelector('#title').setAttribute('class', 'blue');
// This would give the element with the ID of "title" a class of "blue."

document.querySelectorAll('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.
```

---

<h1 class="slide-header">Knowledge Check</h1>

Given the following HTML, how would you add the class of `urgent` to the `<h2>`?

  ```html
  <h1>Welcome to our store</h1>
  <div class="advertisement">
      <h2>BUY BUY BUY</h2>
      <p>Only 30 days left in our monthly sale. Move fast!</p>
  </div>
  ```
  
  (Hint: We covered two different ways of accomplishing this in the lesson.)

<details>
  <summary>Reveal Answer</summary>
  As you’re starting to see, there are different ways of performing any given task. Here are two solutions to this problem:

  **Option No. 1** — using `className`:
  
  `document.querySelector('h2').className = 'urgent';`
  
  **Option No. 2** — using `setAttribute`:
  
  `document.querySelector('h2').setAttribute('class', 'urgent');`

</details>

---

<h1 class="slide-header">Creating DOM Elements</h1>

Not only can you access and update HTML elements using the DOM, you can also create new ones from scratch.

You can use `document.createElement(tagName)` to create a new DOM element. Here’s what it looks like in action:

```javascript
const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");

// This is what's created: <p class="registration-error">Your passwords did not match.</p>
```

---

<h1 class="slide-header">Creating DOM Elements</h1>

Let’s break these steps down:
1. Create a JavaScript variable, `paragraph`. 
2. Give that variable some information: the new element creation property, `document.createElement('p')`. Right now, this `<p>` has no content in it. Let’s add to it.
3. Use the `innerText` property to add text to the `paragraph` variable: `"Your passwords did not match."`
4. Use `setAttribute()` to give the `paragraph` a class of `registration-error`.

```javascript
const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");

// This is what's created: <p class="registration-error">Your passwords did not match.</p>
```

Notice how you’re using `innerText` and `setAttribute()` on the `paragraph` variable. Because you’re working in JavaScript, you have to work through the variable, not the HTML element itself. However, that variable represents the element you’re creating, so whatever you add to it will appear in the HTML.

---

<h1 class="slide-header">Adding Elements to the DOM</h1>

Once you've created a new element, it doesn't just appear on the page by magic! You'll have to add it to the DOM with one of the following methods:

| Method  | Description |
| -------- | ------- |
| `element.append(newElement)`   | Adds the `newElement` as the last child at the end of the original `element` |
| `element.prepend(newElement)` | Adds the `newElement` as the first child at the front of the original `element` |
| [element.insertAdjacentElement(position, newElement)](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) | Adds the `newElement` to a specific position relative to the original `element` |
<br>

For example, if we had a `<div id="posts">` and we wanted to add a new paragraph tag to it, we might do something like this:

```javascript
// First, we create the element and store it in a variable named newPost
const newPost = document.createElement("p");
// Then, we can set properties such as the innerText
newPost.innerText = "JavaScript can be tough!";
// Then, we can grab the parent element that we want to attach our new element to
const postsDiv = document.querySelector("#posts");
// Finally, we use the append method to add our newPost inside of the postsDiv
postsDiv.append(newPost);
```

---

<h1 class="slide-header">Your Turn</h1>

Practice DOM manipulation by completing the following challenges in the next few slides.

These will be difficult exercises, but that’s a good thing. Programming involves thinking differently and accepting the struggles that come with learning new skills. Programmers, more than most professions, are constantly improving and applying new technologies, so pushing through the challenges is a vital skill for software engineers.

Another key skill is the ability to look up answers to things you don’t know. (Ask any programmer — they do this all day long.) Use <a href="https://www.w3schools.com/jsref/dom_obj_all.asp" target="_blank" rel="noreferrer noopener">this list of DOM properties and methods</a> to find anything you’re not sure about.

---

<h1 class="slide-header">Accessing Elements and Element Properties</h1>

Store the element with the ID of `title` into a variable with a name of your choice (we'd suggest `titleElement`. Access that element's text content and store it in a variable named `titleText`.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Accessing Elements" src="https://codepen.io/GAmarketing/embed/xxeRyBr?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/xxeRyBr">
  Accessing Elements</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Accessing Element Attributes</h1>

Store the **class** of the first `span` on the page in a variable named `spanClass`.

---

<h1 class="slide-header">Updating Elements</h1>

Change the text color in the first element to blue by using the `blue` class.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Updating the Blue Span" src="https://codepen.io/GAmarketing/embed/YzMpJgL?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/YzMpJgL">
  Updating the Blue Span</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Updating Elements</h1>

Change the text in the `h1` with the ID of `title` to say `Come on in!`, instead of `Welcome to the DOM`.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Welcome to the DOM" src="https://codepen.io/GAmarketing/embed/gOyLBEQ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/gOyLBEQ">
  Welcome to the DOM</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Creating Elements</h1>

Create an `h4` element with the text of `Powered by JavaScript`. Add that element to the end of the `<body>` of the document.

  <iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Creating Elements" src="https://codepen.io/GAmarketing/embed/OJGbBqd?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GAmarketing/pen/OJGbBqd">
    Creating Elements</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>

---

<h1 class="slide-header">Removing Elements</h1>

Remove the `h1` element with the ID of `title` from the page. <a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove" rel="noreferrer noopener" target="_blank">Documentation</a> on the `remove()` method can help!

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Removing Elements" src="https://codepen.io/GAmarketing/embed/wvZoYOZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/wvZoYOZ">
  Removing Elements</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Conclusion</h1>

DOM Manipulation is how we get from boring, JavaScript console applications to exciting, responsive web applications with complex user interfaces.

The final step is adding Event Listeners to our applications, so users can trigger our well-planned DOM manipulation by clicking buttons, submitting forms, and other universal UI features of websites.

</textarea>
