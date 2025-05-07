// Bismillahirahmanirahim 

import { Alert } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/mmbingeh";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
<div>

<Alert variant="warning">Supports Palastina and Rojava!</Alert>
<Mmmnavbar/>

{children}

<Footer/>
</div>
  );
}
