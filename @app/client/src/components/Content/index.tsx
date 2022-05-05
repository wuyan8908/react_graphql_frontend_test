import React from "react";
import { HStack, Divider } from "@chakra-ui/react";
import { Todo } from "../Todo";
import { About } from "../About";
import { Routes, BrowserRouter, Route } from "react-router-dom";

export const Content = () => {
	return (
		<HStack width='100%' height='100%'>
			<Divider orientation='vertical' />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Todo />}></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>
			</BrowserRouter>
		</HStack>
	)
}