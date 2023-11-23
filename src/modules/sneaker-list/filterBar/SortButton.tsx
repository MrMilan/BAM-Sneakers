import Button from '@mui/material/Button'


type Props = {
    title: string
    icon: React.ReactNode
    selected: boolean
    onClick: () => void
}

const SortButton: React.FC<Props> = ({ title, icon, selected, onClick }) => (
    <Button
        startIcon={icon}
        color={selected ? 'secondary' : 'primary'}
        variant={selected ? 'contained' : 'outlined'}
        onClick={() => onClick()}
    >
        {title}
    </Button>
)

export { SortButton }
