# React Profiler
    React 16.5 adds support for a new DevTools profiler plugin.The concept of the react profiler is to collect timing 
    information about components, the time rendered and committed in order to identify when each component actually 
    rendered and at what speed. Basically to explain to you how fast or how slow your application is.

## Note👀:
    React-dom 16.5+ supports profiling in DEV mode. A production profiling bundle is also available as react-dom/profiling. 
    Read more about how to use this bundle at fb.me/react-profiling

## Explain Profiling in React Application
    DevTools will show a “Profiler” tab for applications that support the new profiling API. 
    Run the project, The “Profiler” panel will be empty initially. 
    Click the record button to start profiling. Once you’ve started recording, DevTools will automatically 
    collect performance information each time your application renders. Use your app as you normally would. 
    Click on Button 1 and to finished profiling, click the “Stop” button. 
    You can see App, Button1 and Button2 all three component are rendered while we just clicked on Button1. 
    so this will decrease the application performance. For better performance we'll use useCallback() 
    and React.memo(). Add  React.memo() in Button1 and Button2 component. It will help us control when 
    our components rerender.
    ex: export const Button1 = React.memo(({ increment }) => {
      UseCountRender();
      return <button onClick={increment}>Button 1</button>;
    });

    Now again check profiling , you'll notice that no extra component will be re-rendered, so you can use 
    anything to increase your application performance with the use of reacting profiling.

### For better understanding, read this blog: 
    https://scotch.io/tutorials/use-the-react-profiler-for-performance
