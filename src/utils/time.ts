import * as dayjs from 'dayjs';
// dayjs().format();

export function currentTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${year}年${month}月${day}日 ${hours}:${minutes}`;
  return formattedDateTime;
}

export default { currentTime };
