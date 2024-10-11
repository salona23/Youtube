import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appstore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
function App() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body/>,
      children : [
        {
          path : "/",
          element : <MainContainer/>
        },
        {
          path : "watch",
          element : <WatchPage/>
        }
      ]
    }
  
  ]);
  return (
    <div>
      <Provider store={appstore}>
      <Header/>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
