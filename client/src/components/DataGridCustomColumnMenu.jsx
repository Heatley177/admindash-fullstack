import {
  GridColumnMenuContainer,
  //   GridFilterMenuItem, deprecated props -> use slots now
  //   HideGridColMenuItem, deprecated props -> use slots now
  GridFilterAltIcon,
  GridVisibilityOffIcon,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
    //HIDE AND SORT NOT WORKING. WHY?

  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterAltIcon onClick={hideMenu} column={currentColumn} />
      <GridVisibilityOffIcon onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
