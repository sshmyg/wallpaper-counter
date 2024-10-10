const countWallpaperRollsForRoom = ({
  roomWidth,
  roomLength,
  roomHeight,
  wallpaperWidth = 1.06,
  wallpaperLength = 10.05,
  emptySpace,
}) => {
  const roomPerimeter = (roomWidth + roomLength) * 2;

  const roomPerimeterWithoutEmptySpace = emptySpace.reduce((acc, { width }) => {
    acc -= width;

    return acc;
  }, roomPerimeter);

  const stripesPerRoll = Math.floor(wallpaperLength / roomHeight);
  const stripesPerRoom = Math.floor(roomPerimeterWithoutEmptySpace / wallpaperWidth);
  const rollsRequired = Math.ceil(stripesPerRoom / stripesPerRoll);

  return rollsRequired;
};

const rollsRequiredForLeavingRoom = countWallpaperRollsForRoom({
  roomWidth: 4.5,
  roomLength: 4,
  roomHeight: 2.4,
  emptySpace: [
    {
      width: 1.35,
      height: 2.1,
    },

    {
      width: 0.7,
      height: 2.2,
    },

    {
      width: 1.3,
      height: 2.2,
    },
  ],
});

const rollsRequiredForBedRoom = countWallpaperRollsForRoom({
  roomWidth: 6,
  roomLength: 3.3,
  roomHeight: 2.4,
  emptySpace: [
    {
      width: 1.6,
      height: 2.18,
    },

    {
      width: 0.96,
      height: 2.1,
    },

    {
      width: 0.76,
      height: 2.1,
    },
  ],
});

console.log('Leaving room:', rollsRequiredForLeavingRoom);
console.log('Bed room:', rollsRequiredForBedRoom);
