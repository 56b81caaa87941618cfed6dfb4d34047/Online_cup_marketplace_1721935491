/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1721935492", {
    template: `
    <section id="items-table-component" class="py-8 bg-white">
        <h2 id="costs-title" class="text-lg font-semibold mb-5">Paper Cup Varieties</h2>
        <div id="costs-table-container" class="overflow-x-auto">
            <table id="costs-table" class="table-auto w-full text-sm">
                <thead id="costs-table-header" class="sr-only" id="costs-table-header">
                    <tr>
                        <th id="description-header">Description</th>
                        <th id="cost-header" scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group" :class="costsGradientStyle" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity" id="costs-cell-description-1" :class="costsCellOneStyle">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    Classic White Cup
                                </a>
                            </div>
                            <p :class="costsDescriptionStyle" id="costs-description-1">Disposable white paper cup for hot beverages</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-1" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$0.05</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity" id="costs-cell-description-1" :class="costsCellOneStyle">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    Eco-Friendly Bamboo Cup
                                </a>
                            </div>
                            <p :class="costsDescriptionStyle" id="costs-description-1">Biodegradable bamboo fiber cup, eco-friendly alternative</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-1" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$0.25</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-3">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5"  id="costs-link-3">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Branded Logo Cup</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-3">Customizable cup with your company's branding</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-3" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$0.15</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-4">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5"  id="costs-link-4">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Reusable Plastic Cup</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-4">Durable plastic cup for multiple uses</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-4" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$1.50</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-5">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5"  id="costs-link-5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Decorative Holiday Cup</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-5">Festive seasonal designs for holidays</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-5" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$0.20</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-6">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5"  id="costs-link-6">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Insulated Hot Cup</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-6">Double-walled paper cup to keep drinks hot</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-6" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$0.30</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="relative text-left font-normal px-4 py-5">
                            <p id="total-description-text" class="italic" :class="costsTableFooterTotalDescriptionStyle">TOT in USD dollar</p>
                        </th>
                        <td id="total-cost" class="relative font-semibold text-right text-base underline px-4 py-5 w-[1%]" :class="costsTableFooterTotalCostStyle"> $2.45</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            costsGradientStyle: "odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900",
            costsCellOneStyle: "after:bg-slate-200 dark:after:bg-slate-800",
            costsDescriptionStyle: "text-slate-500 dark:text-slate-400",
            detailsGradientStyle: "after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%",
            detailsGradientButtonStyle: "after:text-blue-500",
            costsTableFooterTotalCostStyle: "text-emerald-500",
            costsTableFooterTotalDescriptionStyle:"text-slate-500"
        };
    },
});
