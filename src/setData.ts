import { CalculatorBuilder } from "@climaider/calculator"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./setupFirebase"


export function setupCounter(element: HTMLButtonElement) {
	const data = CalculatorBuilder('test-uid')
	
	const setData = () => {
		// add data at collection data with doc name bug. Make sure rules allows this!
		const ref = doc(db, 'data/bug')
		setDoc(ref, data.serialize())
	}

	element.addEventListener('click', () => setData())
}