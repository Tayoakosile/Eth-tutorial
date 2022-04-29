import { useDispatch, useSelector } from 'react-redux'

import { HStack, Text, useCheckbox } from '@chakra-ui/react'
import { answerUserChecked } from '../store/isAnswerChecked'
import { RootState } from '../store/store'
import { useEffect } from 'react'

const Answer = ({ options }: { options: any }) => {
  const { state, getCheckboxProps } = useCheckbox()
  const dispatch = useDispatch()
  const optionUserChose = useSelector(
    (state: RootState) => state.isAnswerChecked.value.id,
  )

  return (
    <>
      <HStack
        as="span"
        w="full"
        cursor={'pointer'}
        h="16"
        border="1px solid white"
        p="4"
        justify="space-between"
        _hover={{
          bg: optionUserChose === options ? 'brand.500' : 'whiteAlpha.300',
        }}
        shadow="md"
        transition={'0.2s all ease-in'}
        onClick={() => {
          dispatch(answerUserChecked({ id: options }))
        }}
        className={optionUserChose === options ? 'isChecked' : 'isNotChecked'}
      >
        <Text fontSize={{ base: 'lg', md: 'xl' }}>{options}</Text>
      </HStack>
    </>
  )
}

export default Answer
