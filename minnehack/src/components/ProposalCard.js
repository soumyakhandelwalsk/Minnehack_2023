import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Text, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function ProposalCard({ id, causeTitle, description, imageUrl }) {


  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      className='m-9'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Cause image'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{causeTitle}</Heading>
          <Text py='2'>
            {description}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            <a href={`/VoteInfo/{id}`}>
              Vote
            </a>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default ProposalCard