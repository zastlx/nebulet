    // @ts-nocheck
import { useState } from "react";
import Modal from "../../components/Modal/main";

function Hack() {
    const [txt, setGay] = useState("");

    return (
        <div>
            <h1>{txt}</h1>
            <Modal inputs={[
                {
                    placeHolder: "Enter Code",
                    binding: {
                        manual: true,
                        set: (e) => {
                            setGay(e.target.value.concat(" ben"))
                        },
                        value: txt
                    }
                },
                {
                    placeHolder: "Enter WorseCode",
                    binding: {
                        manual: false,
                        set: setGay,
                        value: txt
                    }
                }
            ]} buttons={[
            {
                text: "Ok",
                click: (setHidden) => setHidden(true)
            }
        ]} desc={"who hacked my code!!!!!!!!! BRP WAS IT YOURP WAS IT YOURP WAS IT YOURP WAS IT YOU"} title={"froggers"} />
        </div>
    );
}

export default Hack;