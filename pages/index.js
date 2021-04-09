import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log('I am in the component', currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  console.log(req.headers);
  if (typeof window === 'undefined') {
    // We are on the server
    // request should be made to http://ingress-nginx.ingress
    const { data } = await axios.get(
      // 'http://SERVICENAME.NAMESPACE.svc.cluster.local'
      'http://ingress-nginx-controller.kube-system.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );
    return data;
  } else {
    // We are on the browser
    // request can be made with a base url of ''
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }
  return {};
};

export default LandingPage;
