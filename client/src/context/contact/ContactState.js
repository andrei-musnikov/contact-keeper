import React, { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types'

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				type: 'personal',
				id: '5e99b245b4977d6e66b557f5',
				name: 'Test Conteac2t',
				email: 't2eest@email.com',
				phone: '56689044',
				date: '2020-04-17T13:42:29.309Z'
			},
			{
				type: 'professional',
				id: '5e99b239b4977d6e66b557f4',
				name: 'Test Contac2t',
				email: 't2est@email.com',
				phone: '56689044'
			},
			{
				type: 'personal',
				id: '5e99af48ae4eae684943029e',
				name: 'Test Contact',
				email: 'test@email.com',
				phone: '56689044',
				user: '5e998164246bc41817c0f0be'
			},
			{
				type: 'personal',
				id: '5e99af36ae4eae684943029d',
				name: 'Test Contact',
				email: 'test@email.com',
				phone: '56689044'
			}
		],
		current: null,
		filtered: null
	}

	const [state, dispatch] = useReducer(contactReducer, initialState)

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuid()

		dispatch({
			type: ADD_CONTACT,
			payload: contact
		})
	}

	// Delete Contact
	const deleteContact = (id) => {
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		})
	}

	// Set Current Contact
	const setCurrent = (contact) => {
		dispatch({
			type: SET_CURRENT,
			payload: contact
		})
	}

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT
		})
	}

	// Update Contact
	const updateContact = (contact) => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: contact
		})
	}

	// Filter Contacts
	const filterContacts = (text) => {
		dispatch({
			type: FILTER_CONTACTS,
			payload: text
		})
	}

	// Clear Filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER
		})
	}

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
