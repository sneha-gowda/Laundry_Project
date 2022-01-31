import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const steps = [
    {
        status: "Picked Up"
    },
    {
        status: "Washed"
    },
    {
        status: "Ironed"
    },
    {
        status: "Delevered"
    }
];

export default function Status(props) {
    const transfer = {
        status: props.status // change transfer status to progress bar
    };

    const getStepPosition = (transferStatus) => {
        return steps.findIndex(({ status }) => status === transferStatus);
    };

    return (
        <>
            <div style={{ margin: 50 }}>
                <ProgressBar
                    width={"95%"}
                    percent={
                        100 *
                        ((getStepPosition(transfer.status) + 1) / (steps.length - 1)) -
                        1
                    }
                    filledBackground="linear-gradient(to right, #5861AE, #f4f9ff)"
                >
                    {steps.map((step, index, arr) => {
                        return (
                            <Step
                                // position={100 * (index / arr.length)}
                                transition="scale"
                                children={({ accomplished }) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                            width: 20,
                                            height: 20,
                                            color: "black",
                                            backgroundColor: accomplished ? "#5861AE" : "gray"
                                        }}
                                    >
                                        <br />
                                        <br />
                                        <br />
                                        {step.status}
                                    </div>
                                )}
                            />
                        );
                    })}
                </ProgressBar>
            </div>
            
        </>
    );
}
