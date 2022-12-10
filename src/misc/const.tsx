import { lazy } from "react";
import { iComponents } from "./type";

export const ROUTES:iComponents = {

    'home':lazy(()=> import('pages/home')),
    'about':lazy(()=> import('pages/about')),
    'contact':lazy(()=> import('pages/contact')),
    'extra':lazy(()=> import('pages/extra')),
}