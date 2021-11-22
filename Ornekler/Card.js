import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
//React native paper ile card kullanımı örneği
const MyComponent = () => (
    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button onPress={() => console.log('Pressed')}>Cancel</Button>
            <Button onPress={() => console.log('Pressed')}>Ok</Button>

            
        </Card.Actions>
    </Card>
);

export default MyComponent;