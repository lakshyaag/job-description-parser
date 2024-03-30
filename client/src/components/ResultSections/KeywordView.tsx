import { Keywords } from "@/lib/types";
import { NextPage } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface KeywordViewProps {
  keywords: Keywords | undefined;
}

export const KeywordView: NextPage<KeywordViewProps> = ({ keywords }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Important keywords
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Keyword</TableHead>
            <TableHead>Reasoning</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keywords?.keywords.map((keyword) => (
            <TableRow key={keyword.keyword}>
              <TableCell
                className="
              font-bold"
              >
                {keyword.keyword}
              </TableCell>
              <TableCell>{keyword.reasoning}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
