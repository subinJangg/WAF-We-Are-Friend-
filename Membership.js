import React from 'react';
import {Body, Button, Container, Content, Footer, Header, Input, Item, Left, List, ListItem, Text} from 'native-base';
import { StyleSheet } from 'react-native';

import MembershipPicker from './MembershipPicker';

export default function Membership(){
    return(
        <Container>
            <Header style={styles.container}>
                <Text style={styles.headTextStyle}>정보를 입력해주세요.</Text>
            </Header>
            <Content>
                <List>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>이름</Text>
                        </Left>
                        <Body>
                            <Item regular>
                                <Input placeholder='입력'></Input>
                            </Item>
                        </Body>
                    </ListItem>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>성별</Text>
                        </Left>
                        <Body>
                            <MembershipPicker></MembershipPicker>
                        </Body>
                    </ListItem>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>나이</Text>
                        </Left>
                        <Body>
                            <Item regular>
                                <Input placeholder='입력'></Input>
                            </Item>
                        </Body>
                    </ListItem>
                </List>
            </Content>
            <Footer>
                <Content>
                    <Button full>
                        <Text>회원가입</Text>
                    </Button>
                </Content>
            </Footer>
        </Container>
    );
}

const styles=StyleSheet.create({
    headTextStyle:{
        fontSize:25
    },
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    listTextStyle:{
        fontSize:20
    },
    listStyle:{
        height:70
    }
});