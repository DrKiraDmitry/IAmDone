import React, { useEffect, useState } from "react";

// This hook check overflow our components
// I think about use them how unbox Ref type, and exclude clientHeight
// For simple using
// Take me ref, i to know how work with him
// But it's mistake, for us need one parameter it's height
// Not need lock params for one value
export const useOverflow = (Box?: number, Text?: number) => {
    const [Overflow, setOverflow] = useState(false);

    useEffect(() => {
        if (typeof Box === "number" && typeof Text === "number") {
            if (Box < Text) return setOverflow(true);
        }
    }, [Text]);

    return Overflow;
};
