import { NoDataBox } from './NoDataBox'

import type { FilterState } from '../filterBar/filter.types'


type Props = {
    reducerState: FilterState
}

const NoDataBoxes: React.FC<Props> = ({ reducerState }) => (
    <>
        {
            !reducerState.filteredSneakerList.length && !!reducerState.sneakerList.length && (
                <NoDataBox message="Search better. There is nothing like this in your collection." />

            )
        }
        {
            !reducerState.sneakerList.length && (
                <NoDataBox message="Seem’s like you still didn’t add any new sneaker to your collection" />
            )
        }
    </>
)

export { NoDataBoxes }
