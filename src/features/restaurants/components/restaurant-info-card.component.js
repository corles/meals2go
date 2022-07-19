import React from "react"
import styled from "styled-components"
import { Text, StyleSheet } from "react-native"
import { Avatar, Button, Card,  Paragraph } from "react-native-paper"

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const { name = "ABC", icon, photos = ["https://picsum.photos/id/237/400/200"], address = "100 ABC Dr.", isOpenNow = true, rating = 3, isClosed } = restaurant

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
})
