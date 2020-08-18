import React from 'react';
import {Layout, Content} from 'react-mdl';
import welcome from '../../assets/img/welcome.jpg';


const welcomeStyle={
    color:"black",
    position: "absolute",
    bottom: "0px",
    left: "20px"
};

const Welcome = () => {
    return(
        <>
            <div style={{height: '400px', position: 'relative'}}>
                <Layout style={{background: 'url(' + welcome + ') center / cover'}}>
                <Content>
                    <h1 style={welcomeStyle}>Welcome!</h1>
                </Content>
                </Layout>
            </div>
        </>
    );
}

export default Welcome;