import * as React from 'react';
import { Button } from 'react-native-paper';
import SmsAndroid from 'react-native-get-sms-android';
import { PermissionsAndroid, Text } from 'react-native';
import { getLastSync, setLastSync } from '../../settings';
import { doSync } from '../../api';

/* List SMS messages matching the filter */
var filter = {
  box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

  /**
   *  the next 3 filters can work together, they are AND-ed
   *
   *  minDate, maxDate filters work like this:
   *    - If and only if you set a maxDate, it's like executing this SQL query:
   *    "SELECT * from messages WHERE (other filters) AND date <= maxDate"
   *    - Same for minDate but with "date >= minDate"
   */
  // minDate: 1554636310165, // timestamp (in milliseconds since UNIX epoch)
  // maxDate: 1556277910456, // timestamp (in milliseconds since UNIX epoch)
  // bodyRegex: '(.*)How are you(.*)', // content regex to match

  /** the next 5 filters should NOT be used together, they are OR-ed so pick one **/
  // read: 0, // 0 for unread SMS, 1 for SMS already read
  // _id: 1234, // specify the msg id
  // thread_id: 12 // specify the conversation thread_id
  // address: '+1888------', // sender's phone number
  // body: 'How are you', // content to match

  /** the next 2 filters can be used for pagination **/
  indexFrom: 0, // start from index 0
  maxCount: 10, // count of SMS to return each time
};

interface SMS {
  _id: number;
  thread_id: number;
  address: string;
  date: number;
  date_sent: number;
  protocol: number;
  read: number;
  status: number;
  type: number;
  reply_path_present: number;
  body: string;
  locked: number;
  sub_id: number;
  error_code: number;
  creator: string;
  seen: number;
}

const formatDate = (time: null | number) => {
  if (!time) {
    return undefined;
  }
  return new Date(time).toLocaleDateString();
};

function sync(lastSync: null | number, indexFrom: number = 0) {}

interface Props {
  pushEvent: (el: React.ReactNode) => void;
}
export function Sync({ pushEvent }: Props) {
  // const handlePress = async () => {
  //   const lastSync = await getLastSync();
  //   pushEvent(<Text key={`${new Date().getTime()}_start`}>Start sync</Text>);

  //   // check permissions
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.READ_SMS,
  //     {
  //       title: 'Allow access to SMS',
  //       message: 'Allow SMS access for syncing',
  //       buttonPositive: 'OK',
  //       buttonNegative: 'Never',
  //       buttonNeutral: 'Ask me later',
  //     }
  //   );

  //   if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
  //     return;
  //   }

  //   // TODO: pagin
  //   const smsList: { count: number; sms: Array<SMS> } = await new Promise(
  //     (resolve, reject) =>
  //       SmsAndroid.list(
  //         JSON.stringify({
  //           ...filter,
  //           // minDate: lastSync
  //         }),
  //         reject,
  //         (count: number, sms: string) =>
  //           resolve({ count, sms: JSON.parse(sms) })
  //       )
  //   );

  //   // TODO: sync with instance
  //   console.log(
  //     smsList.count,
  //     smsList.sms.length,
  //     smsList.sms.map(({ _id, body }) => ({ _id, body }))
  //   );

  //   const lastSynced = smsList.sms[smsList.sms.length - 1];
  //   pushEvent(
  //     <Text key={`${new Date().getTime()}_count`}>{smsList.count} synced</Text>
  //   );
  //   pushEvent(
  //     <Text key={`${new Date().getTime()}_end`}>
  //       From {formatDate(lastSync) || 'the beginnig'} to{' '}
  //       {formatDate(lastSynced.date)}
  //     </Text>
  //   );
  //   setLastSync(lastSynced.date);
  // };

  const handlePress = async () => {
    console.log('start');
    try {
      const res = await doSync();
      console.log('res');
      console.log(res.status, await res.json());
    } catch (err) {
      console.error('err', err);
    } finally {
      console.log('end');
    }
  };
  return (
    <Button mode="contained" onPress={handlePress}>
      Sync SMS
    </Button>
  );
}
