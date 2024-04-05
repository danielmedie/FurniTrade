import React from 'react';

const SellForm: React.FC = () => {
  return (
    <div className="sell-form bg-gray-100 p-8 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Sell Your Furniture</h2>
      <form>
        <div className="form-group mb-4">
          <label htmlFor="productName" className="block text-lg font-semibold mb-2">Product Name</label>
          <input type="text" id="productName" name="productName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
          <textarea id="description" name="description" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price" className="block text-sm font-semibold mb-2">Price ($)</label>
          <input type="number" id="price" name="price" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="image" className="block text-sm font-semibold mb-2">Image URL</label>
          <input type="text" id="image" name="image" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600">Sell</button>
      </form>
    </div>
  );
};

export default SellForm;
