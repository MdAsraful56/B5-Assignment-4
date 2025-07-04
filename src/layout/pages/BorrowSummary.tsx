import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", borrow: 200 },
  { month: "February", borrow: 100 },
  { month: "March", borrow: 200 },
  { month: "April", borrow: 20 },
  { month: "May", borrow: 200 },
  { month: "June", borrow: 380 },
];

const chartConfig = {
  borrow: {
    label: "borrow",
    color: "var(--color-desktop)",
  },
} satisfies ChartConfig;

export function BorrowSummary() {
  return (
    <div className="">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent payload={undefined} />} />
          <Bar dataKey="borrow" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
