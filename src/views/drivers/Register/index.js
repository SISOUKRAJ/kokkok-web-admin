import { Steps, Button, message } from 'antd';
import React from 'react'
import './RegisterSetp.css'
import {DataContent} from './context'

import { DriverOptionContext } from "../../context/getDriver";

import RegisterDriver1 from './RegisterDriver1'
import RegisterDriver2 from './RegisterDriver2'
import RegisterDriver3 from './RegisterDriver3'
import RegisterDriver4 from './RegisterDriver4'

import { QueryClient,QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()
const { Step } = Steps;


const steps = [
  {
    title: 'Register',
    content: <RegisterDriver1/>,
  },
  {
    title: 'Docstype',
    content: <RegisterDriver4/>,
  },
  {
    title: 'Fee ',
    content: <RegisterDriver3/>,
  }

];

const App = () => {
    const [current, setCurrent] = React.useState(0);
let [driver_id,setDriver_id]=React.useState();

const { set } =React.useContext(DriverOptionContext);


    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
	const [btnNext, setBtnNext] = React.useState("false")

    return (
        <>
        <DataContent.Provider value={[driver_id,setDriver_id,btnNext,setBtnNext]}>

        <QueryClientProvider client={queryClient}>
          <Steps current={current} className="setps-title">
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>

          <div className="steps-content">{steps[current].content}</div>

          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary"  onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
          </QueryClientProvider>
        </DataContent.Provider>
        </>
      );
    };
export default App