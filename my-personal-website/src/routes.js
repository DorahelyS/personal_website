// import all components I want a specific route to
import App from "./App";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
//import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";


// creating array for routes which will contain all the paths
const routes = [
    // starting with parent component - App
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/resume',
                element: <Resume/>
            }

        ]
    }
];

export default routes