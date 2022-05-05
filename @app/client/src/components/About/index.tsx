import React from "react";
import {
	Heading,
	Text,
	VStack,
	Link
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";


export const About = () => {
	return (
		<VStack p={10} spacing={5} width='100%'>
			<Heading size="2xl">About page</Heading>
			<Text>This is a Todo Web App Created by Alex Wu.</Text>
			<Link as={ReactLink} to='/' >Back to Home</Link>
		</VStack>
	)
}