import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { categories, products } from "@/lib/demo-data";

export function InventoryTable() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate">Inventory control</p>
          <h2 className="mt-1 text-xl font-semibold text-ink">Fast-moving stock coverage</h2>
        </div>
        <button className="rounded-full bg-leaf px-4 py-2 text-sm font-medium text-white">
          Record stock movement
        </button>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-slate">
            <tr>
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Stock</th>
              <th className="pb-3 font-medium">Run rate</th>
              <th className="pb-3 font-medium">Supplier</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#ece6d7]">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-4">
                  <p className="font-medium text-ink">{product.name}</p>
                  <p className="text-slate">{product.sku}</p>
                </td>
                <td className="py-4">
                  {categories.find((category) => category.id === product.categoryId)?.name}
                </td>
                <td className="py-4">
                  {product.stock} {product.unit}
                </td>
                <td className="py-4">{product.dailyRunRate}/day</td>
                <td className="py-4">{product.supplier}</td>
                <td className="py-4">
                  <Badge
                    tone={
                      product.status === "critical"
                        ? "danger"
                        : product.status === "low"
                          ? "warning"
                          : "success"
                    }
                  >
                    {product.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
