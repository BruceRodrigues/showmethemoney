import React from 'react'
import { Story } from '../../utils'
import { Autocomplete, AutocompleteProps } from './Autocomplete'

export default { title: 'Atoms/Autocomplete' }

const HEROES = ['Batman', 'Iron man', 'Spider man', 'Super man', 'Black Widow']

const Template: Story<AutocompleteProps<string>> = (
    args: AutocompleteProps<string>
) => <Autocomplete {...args} />

export const basic = Template.bind({})
basic.args = {
    label: 'Who is your favorite hero?',
    itemToString: (item) => item ?? '',
    items: HEROES,
    name: 'hero',
}

export const withError = Template.bind({})
withError.args = {
    ...basic.args,
    error: 'Error',
}
