import { IRoute } from "../interfaces/IRoute";
import { AUTH, MAIN } from "../constants/routes"
import { AuthLayout } from '../../components/layouts/AuthLayout' 
import { List } from "../../components/List/List";

export const ROUTES: IRoute[] = [{
    path: AUTH,
    component: AuthLayout
},
{
    exact: true,
    path: MAIN,
    component: List
}]