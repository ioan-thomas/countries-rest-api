# REST Countries API with color theme switcher 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [Static-Site Generation (SSG)](#static-site-generation-ssg)
    - [Incremental Static Regeneration (ISR)](#incremental-static-regeneration-isr)
    - [Routing in Next.js](#routing-in-nextjs)
    - [Passing props from getStaticPaths() to getStaticProps()](#passing-props-from-getstaticpaths-to-getstaticprops)
    - [Using Context with Next.js Dynamic Routes](#using-context-with-nextjs-dynamic-routes)
    - [Working with MaterialUI](#working-with-materialui)
    - [React's useMemo Hook ](#the-react-usememo-hook)
    - [Working with images and LCP](#working-with-images-and-lcp)
    - [Implementing Filtering in React](#implementing-filtering-in-react) 
    - [Implementing Searching in React](#implementing-searching-in-react)
    - [Debouncing and Throttling](#debouncing-and-throttling)
    - [The Pros and Cons of Lifting State](#the-pros-and-cons-of-lifting-state)
    - [Fetching Only the Required Information](#fetching-only-the-required-information)
    - [Adding a Custom 404 Page with Next.js](#adding-a-custom-404-page-with-nextjs)
  - [Continued development](#continued-development)
    - [Returning to this Project](#returning-to-this-project)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview
### Screenshot

![](./design/desktop-preview.jpg)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML & modern CSS
- [REST API](https://restcountries.com/)
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Material UI](https://mui.com/) - For styles and prebuilt components

### What I learned

##### Static-Site Generation (SSG)

I learned that there are many benefits to using SSG, and that implementing SSG with Next.js is very straight forward. The `getStaticProps` async function that comes out of the box and is used in a page like so: 

```js
export const getStaticProps = async () => {

	const res = await fetch(endpoint);
	const data = await res.json();

  return {
		props: { data }
	}

}
```

Exporting the function from a page will allow Next.js to pre-render the page at build time (on the server) using the returned props.

Those returned props are then passed to the page component via the prop object.

<br>

##### Incremental Static Regeneration (ISR)

I learned that in addition to SSG, ISR adds the benefit of re-hydrating pages, i.e. updating static-pages after they've been built. 

Similar to SSG, implementing ISR could not be easier: 

```js
export const getStaticProps = async () => {

	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();

  return {
		props: { data },
    revalidate: 250
	}

}
```

It is as simple as adding the `revalidate` props to `getStaticProps()`.

When a request is made to a page that was pre-rendered at build time, it will initially show the cached page (the page initially fetched and built).

Any requests to the page after the initial request and before 250 seconds are also cached and instantaneous. I set a time of 250 seconds as I do not expect the API to update new information very regularly, nor do I expect large amounts of traffic thus, the large interval between requests can be justified. Please note, however, that the this time can be altered.

- After the 250-second window, the next request will still show the cached (stale) page.
- Next.js triggers a regeneration of the page in the background.
- Once the page generates successfully, Next.js will invalidate the cache and show the updated page. If the background regeneration fails, the old page would still be unaltered, ready for the next user who visits the page.

<br>

##### Routing in Next.js

As with many things, Next.js makes routing in React very easy. It's as simple as placing a file in the `/pages` directory.

I learned that dynamic routes can be created for pages paths that depend on external data e.g. in this project's case, I created a page for every country that is fetched from the API. To do this:

 1. I added `/[slug].js` to the `/pages` directory. This will give each page the path format /[slug], the forward slash indicates the homepage. 
 2. I then, exported an async function called `getStaticPaths`: 
 
 ```js 
 export const getStaticPaths = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const paths = data.map(country => {
        return {
            params: {slug: (country.name.common).toLowerCase()}
        }
    })
    return {
        paths,
        fallback: false
    }
}
 ```
 In this function I made another fetch request to the API endpoint to retrieve all of the names of the countries to use as the URL slug.

3. This function then retruns an object with some required parameters. The paths parameter is an array of objects containing all of the path names. Next.js uses the paths array to generate a route for each of the elements in the paths array.

E.g. 

```js
return {
  paths:[
    {params: {slug: "Greece"}},
    {params: {slug: "France"}},
  ]
}
```

As you can see in the example above, the paths array contains two objects, one with the key-value pair `slug: "Greece"` and the other key-value pair being `slug: "France"`. These key-vale pairs specify the route parameters. This is why the key in this object matches the file name i.e. `/[slug].js` as this tells Next.js what paths to generate.

4. Lastly I set the fallback parameter to false. I learned that by setting this to false, the user is redirected to the 404 page a route is invalid. 

For bigger applications (such as an e-commerce store with lots of staic pages that depend on data), this can be set to true and the user could see a skeleton component or a loading spinner when they request a page that hasn't been generated yet. After `getStaticProps` has finished, the page will be rendered with the requested data (when paired with ISR).

<br>

##### Passing props from the getStaticPaths function to the getStaticProps function

In the code snippet below, I am using the `getStaticProps` to fetch data from an API endpoint on the server and then returning that data via props to the `/[slug]` page.

```js
export const getStaticProps = async ({params}) => {

  const countryName = params.slug
	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
  data.forEach(country => countryBorders[country.cca3] = country.name.common)

  const relData = data
  .filter(country => country.name.common.toLowerCase() === countryName)
  .map(country => {
      return { 
          // countryInfo has been removed for readability
      }

  })

	return {
		props: { relData, countryBorders },
        revalidate: 250
	}
}
```
As you can see, the props object is destructured to get the params object. I decided to do this as in the design I had to display every country's neighbouring countries (if any). 

I stumbled upon a problem where the API does not return the names of the neighbouring countries, only an array of letters e.g. fetching information on the country Georgia returns:

```js
borders: [
"ARM",
"AZE",
"RUS",
"TUR"
]
```

I noticed that the letters correspond to a code (known as a cca3 country code) that was another paramter available from the API JSON object via `country.cca3`.

From the get-go, I had planned to create an object of all the possible cca3 and country name combinations, the cca3 code being the key and the country name being the value. 

At first, I created the object on the server when the data was fetched for the hompage, as all the country information was being retrieved. Originally, the homepage then created a context object with the array of all the possible country combinations. I then switched to creating the object when fetching the data in the `[slug].js` page...

I saw that when a country name was entered in the URL bar, and on reload, the context object was being cleared. At the time, I did had not thought about the difference between development and production fetching with Next.js, and thus, I switched to fetching the all of the country's again. While this doesn't necessarily slow the build-time as the application currently is, if the application were to scale then I would have to look into adopting my orignal solution as well as exploring some others. My original solution would have worked as the data is already fetched when the user is interacting with the page, meaning, there would not be a case where the data is not available.

<br>

##### Using Context with Next.js Dynamic Routes

Using React's context API with Next.js' dynamic routes was something that took me a while to figure out as there was not a lot of information readily available to solve my use case. 

I found a [stackoverflow solution](https://stackoverflow.com/questions/61927604/pass-custom-prop-or-data-to-next-js-link-component) that describes passing props via Next.js' `<Link />` component: 

```js
<Link href={"/[slug]"} as={`/${name.toLowerCase()}`}>
      <Card>
          //  Card component information removed for readability
      </Card>
</Link>
```

<br>

##### Working with MaterialUI
I learned that there are advantages to using MateralUI over traditional CSS. The biggest would be that components are pre-made and take little-to-no effort to use. 

I learned to implement theme context using MaterialUI's built in theme components, as well as the React context API. Here are the steps I took:

1. I created a function that toggles between styles based on the argument. 
 
 ```js
 export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...mode === 'light'
		? {
			background:{
				default: 'hsl(0, 0%, 98%)'
			},
			primary: {
				main: 'hsl(0, 0%, 100%)',
			},
			// more light theme styles are here but removed for readability
		}
		: {
			background:{
				default: '#1f2c36'
			},
			primary: {
				main: '#2b3844',
			},
			// more dark theme styles are here but removed for readability
		}
	}, 
	//  typography styles that remained the same for both modes are here but removed for demo
})
 ```

The `getDesignTokens` function above takes `mode` as a parameter, whereby the value 'light' or 'dark' will be passed as an argument to show the styles for the selected mode.

2. In `_app.js` I created some state to change and contain the theme information i.e. what mode is selected. This by default is set to 'dark'. This was simply due to my personal preference.

3. Still in `_app.js`, I created the function `toggleColorMode`, to toggle between theme modes. The mode is set based upon the previous mode, ie., if the mode is 'light', then the function will set the mode to be 'dark' and vice versa. Here is that function: 

```js
const toggleColorMode = () => {
			setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
		  }
```

4. Remaining in `_app.js`, I used Material UI's `createTheme` to create a theme object based upon the mode selected. I passed `createTheme` the returned value from my previously made `getDesignTokens` function, passing in the value of the `mode` state:

```js
const theme = React.useMemo(
		() =>
		  createTheme(getDesignTokens(mode)),
		[mode],
	  );
```

As the theme mode is assigned to React's state object, the component is re run when the mode state changes, causing a new theme object to be created and the application's styles to be changed.

5. Using Material UI's `ThemeProvider` component, the theme was injected into the application. E.g.

```js
return (
		<BorderContextProvider>
				<ThemeProvider theme={theme}>
					<Head>
						<meta name="viewport"
							content="initial-scale=1, width=device-width" />
						<title>Where in the world?</title>
					</Head>
					<CssBaseline />
						<Navbar changeMode={toggleColorMode}/>
					<Component {...pageProps} />
				</ThemeProvider>
		</BorderContextProvider>
	);
```

6. I accessed the Material UI's (MUI's) theme object that I modified, via MUI's `useTheme` hook. I could then access the properties within that object.

After using the theme, I discovered that some styles could be accessed by simply adding a string of the path to access a specfic property e.g. the backgroundColor style property:

```js
sx={{ maxWidth: 345, minHeight: '336px', 
        transition: 'all 0.3s ease', '&:hover':{transform: 'rotate(3deg)', cursor: 'pointer', backgroundColor: 'hoverColor.primary'}, backgroundColor: 'primary.main',
        boxShadow: theme.palette.boxShadow.primary}}>
```

However, some custom styling that I added in addition to MUI's default style properties required me to access them via JavaScript e.g, the boxShadow property in the above example. 

<br>

###### React's useMemo Hook 

This project was my first time learning a lot of lessons, and one of those was when to use React's `useMemo` hook. 

I learned that the hook 'Memo' in `useMemo` stands for memoization, which is the idea of caching a value so you don't have to re-compute it everytime a component re-renders, for example, when state changes. 

In the project, I used this hook when creating the theme:

```js
const theme = React.useMemo(
		() => createTheme(getDesignTokens(mode)),
		[mode],
	  );
```

The returned value from this hook is the theme value from the `getDesignTokens` function. To read more about this, take a look at the [working with MaterialUI](#working-with-materialui) section where I talk about creating the theme. 

This value is then cached, not to rerun on every render, and only runs again when the value of `mode` changes (in the dependency array). 

<br>

##### Working with Images and LCP

This project taught me about working with images in not only Next.js but in general web development too.

One thing I learned was the ability to add fallback images to a source property:

```js
<Image
  component="img"
  height="160" 
  width='264'
  src={flags.svg || flags.png}
  alt={name + ' flag'}
  layout="responsive"
  objectFit='cover'
  priority={flags.svg === 'https://flagcdn.com/ge.svg' ? true : false}
/>
```

As you can see in the example above, the **src** property will use the value from `flags.svg` (which is a link for an image returned from the Rest API), but will default to the value from `flags.png` if an error occurs with `flags.svg` or in the event it's unavailable. 

Given that I opted to use [Static-Site Generation](#static-site-generation-ssg), this will only be a concern during build-time.

I also learned about prioritising images and the Largest Contentful Paint (LCP).

The LCP is a metric used to represent how quickly from when the user initiates loading the page until the largest image (or text) is rendered within the viewport. This is an important metric as it can be the deciding factor between a sluggish website and a fast performing website.

<br>

##### Implementing Filtering in React

Filtering in Reat was something I had done in a previous project so I followed the same principles. 

It is relatively simple in practise: 

```js
let filteredCountries = countries.filter(country => {
            switch (filterRegion) {
                case 'all':
                    return true;
                case 'Africa':
                case 'Americas':
                case 'Antarctic':
                case 'Asia':
                case 'Europe':
                case 'Oceania':
                    return country.region === filterRegion
                default:
                    return true
            }
        })
```

The **countries** array in the example is one containing all of the countries objects. The expression - **filterRegion** - is returned from the [index page](/pages/index.js). In the index page, **filterRegion** is a piece of state representing the users input from the [Filter](/components/Filter.js) compoment - which is the dropdown allowing users to select a region to filter by.

<br>

##### Implementing Searching in React

Similar to [implementing filtering in React](#implementing-filtering-in-react), implementing searching functionality was something I had done in a follow-along project. However, this was the first project that I had to implement such functionality by myself. 

I chose to make the search functionality work hand-in-hand with the filtering functionality, allowing for search results to be filtered and vice versa. 


<br>

##### Debouncing and Throttling

<br>

##### The Pros and Cons of Lifting State

<br>

##### Fetching Only the Required Information

<br>

##### Adding a Custom 404 Page with Next.js

<br>

### Continued development
Here are some areas I want to continue focusing on in future projects:

It is important in future that I evaluate the technologies I am using in my projects as there many drawbacks to some libraries and frameworks, as I found with MaterialUI. For example, was I to start this project again from scratch, I would have opted to use a framework like [Tailwind CSS](https://tailwindcss.com/) or [Styled Components](https://styled-components.com/) instead of MaterialUI.

I would like to delve deeper into improving website performance as this will not only aid in future projects but also for when I am working in a professional setting, allowing me to contribute more to my future development teams.

I would like to begin implementing animations via a 3rd party animation library as it can make a website look and *feel* more professional.
#### Returning to this Project

When I have continued my development, I would like to return to this project to implement the following: 

- I would like to alter the way in which my project consumes the theme context. To implement MateralUI's theme context, in the way in which the documentation states, was a little hard for me to grasp given I do not know the ins and outs of the component library yet. I would like to take the time to get more familiar with the framework and alter the code to align the project with MaterialUI's best practices. 
- I would like to persist the user's current filter settings to local storage, this way, when the user returns to the homepage from a filtered homepage, they will continue to see their results.
- I would like to add tests to any future components that I create, using a testing framework such as Jest or Mocha. This will ensure that bugs and errors are minimised as well as building my knowledge of testing.
- I would like to add end-to-end testing too for the same reasons as the point above.
- After researching improving website performance, I would like to improve the website's Google Lighthouse performance score. I would look at adding lazy loading to the card components using the browser's Intersection Observer API, loading the components on demand. 


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Twitter - [@iioanthomas](https://www.twitter.com/iioanthomas)
