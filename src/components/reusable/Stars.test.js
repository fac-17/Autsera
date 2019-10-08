import React from "react";
import { render, fireEvent, getByTitle } from "@testing-library/react";
import Stars from "./Stars";

test("if it renders stars",()=>{
    render(<Stars has="2" max="3"/>)
})

test("if it renders stars correct number of filled stars",()=>{
    const {getAllByTitle}=render(<Stars has="2" max="5"/>)
    const fullStars=getAllByTitle("Full Star");
    expect(fullStars.length).toBe(2);
})
test("if it renders stars correct number of empty stars",()=>{
    const {getAllByTitle}=render(<Stars has="2" max="5"/>)
    const emptyStar=getAllByTitle("Empty Star");
    expect(emptyStar.length).toBe(3);
})
test("if it renders stars correct number of  stars",()=>{
    const {getAllByTitle}=render(<Stars has="2" max="5"/>)
    const emptyStar=getAllByTitle("Empty Star");
    const fullStars=getAllByTitle("Full Star");
    expect(emptyStar.length+fullStars.length).toBe(5);
})