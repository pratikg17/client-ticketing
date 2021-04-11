import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header</h1>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getIntitialProps = async (appContext) => {
  console.log(Object.keys(appContext));
  console.log('LANDING PAGE', appContext);
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  const pageProps = await appContext.Component.getIntitialProps(appContext.ctx);
  console.log('pageProps', pageProps);
  return data;
};
export default AppComponent;
