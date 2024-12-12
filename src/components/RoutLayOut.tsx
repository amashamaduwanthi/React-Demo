import {Outlet} from "react-router";
import {Navigation} from "./Navigation.tsx";

export function RoutLayOut(){
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    )
}