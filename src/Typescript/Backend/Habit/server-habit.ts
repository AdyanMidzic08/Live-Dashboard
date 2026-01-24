import habitApp from './habit';

const PORT_HABIT = 4000;

habitApp.listen(PORT_HABIT, () => {
    console.log(`Server is running on http://localhost:${PORT_HABIT}`)
})