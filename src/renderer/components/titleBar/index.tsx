import { memo } from 'react';

export default memo(function TitleBar() {
  return (
    <div className="justify-center h-[40px] absolute left-0 top-0 z-50 w-full flex items-center region-drag px-[12px]">
      {/* title */}
      <div>{/* App-Title */}</div>
    </div>
  );
});
