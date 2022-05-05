import React from "react";
import {
	VStack,
	Divider,
	InputGroup,
	InputLeftElement,
	Input,
	Button 
} from "@chakra-ui/react";
import { Search2Icon, QuestionOutlineIcon ,CalendarIcon } from '@chakra-ui/icons'

export const SideBar = () => {
	return (
		<VStack width='100%' height='100%' p={3} spacing={8}>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children={<Search2Icon color='gray.300' />}
				/>
				<Input type='text' placeholder='Search' />
			</InputGroup>
			<Button width='100%' leftIcon={<CalendarIcon />} colorScheme='teal' variant='solid' onClick={() =>window.location.href='/'} >
				Todos
			</Button>
			<Divider orientation='horizontal' />
			<Button width='100%' leftIcon={<QuestionOutlineIcon />} onClick={() =>window.location.href='/about'}>
				About
			</Button>
		</VStack>
	)
}