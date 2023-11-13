"use client"
import FetcchButton from "@fetcch/kit";
import "@fetcch/kit/dist/cjs/index.css"
// import Button from "tst-kit";

export const Fetcch = () => {
    return (
        <>
            {/* <FetcchButton secretKey="1a5181c3-2d69-4c1f-9b11-9912f2a9ada9" action="Deposit" requestId="212" name="TIAR">das</FetcchButton> */}
            <FetcchButton secretKey="1a5181c3-2d69-4c1f-9b11-9912f2a9ada9" action="Pay" requestId="231" name="TIAR">das</FetcchButton>
        </>
    )
}