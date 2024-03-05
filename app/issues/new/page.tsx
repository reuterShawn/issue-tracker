"use client"

import React from 'react'
import { TextArea, TextField } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl'>
        <TextField.Root>
            <TextField.Input placeholder='Title' />
        </TextField.Root>
        <TextArea placeholder='description'/>
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage