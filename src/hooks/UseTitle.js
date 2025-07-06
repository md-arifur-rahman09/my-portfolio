// src/hooks/useTitle.js

import { useEffect } from "react";

export const useTitle = (pageName) => {
    useEffect(() => {
        document.title = `Arifur Rahman  ||  ${pageName}`;
    }, [pageName]);
};
