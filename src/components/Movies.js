import React from 'react';
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
            <h4> Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9309/689309-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1258/911258-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6941/1036941-v-b7f0f9abf579" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6365/936365-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5157/875157-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7809/877809-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5180/875180-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5190/875190-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5167/875167-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4390/674390-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4483/674483-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4432/674432-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4622/674622-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4411/674411-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5211/875211-v" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
overflow: hidden;
`
const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
overflow: hidden;
border: 3px solid rgba(249, 249, 249, 0.8);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -16px;
    border-color: rgba(249, 249, 249, 0.8);
}

`