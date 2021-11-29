# React Animal Farm
**Use [this app](https://github.com/alchemycodelab/react-animal-farm) as a template for your deliverable!**
### Learning Objectives

- Describe and utilize the classic React gotchas:
  - Styles: using className to set styles versus `style = {{ background: 'magenta' }}`
  - Images: importing images versus putting assets in the public directory
  - The need for fragments and returning single children from component render methods"
- Use Netlify to deploy a React app
- Use attributes in parent components to pass data down to child components as props
- Use {} as "portals" in the render method to do JavaScript inside our HTML
- Use .map to iterate over an array and render new elements for each item in an array.
- Use jsx to product & render a React component

### Description

Welcome to the Alchemy Farm! For this deliverable, you will practice creating functional components, mapping through lists and rendering a component for each item.

There is a list of animals provided for you in `data.js`, as well as an empty `<Main />` component and an empty `<Animal />` component. You need to add the code to display the animals by mapping through the list provided and rendering an `<Animal />` component for each animal. The final product should look like this:
![](mockup.png)

### Acceptance Criteria

- `<Main />` should import `background.png` and set it as a background image on the `<main>` element
- `<Main />` component should use a `.map` to loop through and render an `<Animal />` component for each animal listed in `data.js`
- Props should be destructured properly in `<Animal />`
- Animals should be positioned dynamically using the `style` attribute in JSX and props
- <Animal /> should utlize the existing classes in `Animal.css`
- App should be deployed on Netlify

### Rubric

| Task                                                                        | Points |
| --------------------------------------------------------------------------- | ------ |
| Uses a `.map` to render `<Animal />` component for each animal in `data.js` | 4      |
| Properly destructures and uses props in `<Animal />`                        | 2      |
| Dynamically sets the `style` attribute in JSX to position the animals       | 2      |
| Utilizes existing classes to properly display animals                       | 1      |
| Deployed on Netlify                                                         | 1      |

### Image Attribution

Backgrounf Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=147828">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=147828">Pixabay</a>
