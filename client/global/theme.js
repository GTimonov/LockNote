import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
export const theme = (() => {
    let th = createMuiTheme({
        palette: {
            primary: purple,
            secondary: green,
        },
        status: {
            danger: 'orange',
        },
    });
    th = responsiveFontSizes(th);
    return th
})()
