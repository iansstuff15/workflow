import { LegacyRef, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { FileText, Image, XCircle } from 'lucide-react';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Label } from '../ui/label';
import AppButton from '../button/appButtons';
const SelectFile = () => {
  const [files, setFiles] = useState<Array<File>>([]);
  const inputFileRef: LegacyRef<HTMLInputElement> | undefined = useRef(null);
  return (
    <div>
      <Input
        type="file"
        multiple
        ref={inputFileRef}
        placeholder="Test"
        onChange={(value) => {
          const tempFiles = Array.from(value.currentTarget.files!);
          console.log(tempFiles);
          setFiles(tempFiles);
          console.log(files);
        }}
        className="hidden"
        accept=".pdf,.png,.jpg,.jpeg"
      />
      <AppButton
        onClick={() => {
          inputFileRef.current!.click();
        }}
        label={
          files.length != 0
            ? `${files.length} file selected`
            : 'Add attachments'
        }
        variant={'outline'}
        className="w-full justify-start font-normal"
      />
      {files.length != 0 ? (
        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
          {files?.map((data, index) => {
            return (
              <ListboxItem
                className="cursor-default"
                key={index}
                description={`${data.size} kb`}
                isReadOnly
                startContent={
                  <span className="bg-primary p-2 rounded-md text-white">
                    {data.type.split('/')[0] == 'image' ? (
                      <Image />
                    ) : data.type.split('/')[1] == 'pdf' ? (
                      <FileText />
                    ) : null}
                  </span>
                }
                endContent={
                  <XCircle
                    className="cursor-pointer"
                    onClick={() => {
                      setFiles(
                        files.filter((data, fileIndex) => fileIndex != index)
                      );
                    }}
                  />
                }
              >
                {data?.name}
              </ListboxItem>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
};

export default SelectFile;
