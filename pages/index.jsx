import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import { Text } from "../components/Text/Text";

export default function IndexPage() {
  const [state, setState] = useState(0);
  function handleClick() {
    setState(state + 1);
  }
  return (
    <main>
      <Button onClick={handleClick}></Button>
      <br />
      <span>{state}</span>
      <br />
      <Button>Кнопка 111</Button>
      <h1>Hello world!</h1>

      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi rerum consequatur consectetur eligendi optio distinctio quas, omnis voluptatem! Fuga possimus quidem consectetur aspernatur ad repudiandae id nesciunt inventore vero esse?</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus quam sapiente! Aliquam magnam rerum deserunt totam quod omnis. Similique quia facilis ex, mollitia quam excepturi quis dolorum exercitationem omnis id aut quo nihil iure consequatur nisi animi quasi iusto necessitatibus beatae odit fugiat libero aperiam, in esse! Laudantium, rerum? </Text>
    </main>
  )
}