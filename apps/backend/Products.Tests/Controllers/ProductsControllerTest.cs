using System;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Products.Controllers;
using Products.Models.ViewModels;
using Products.Repositories;
using Xunit;

namespace Products.Tests.Controllers
{
    public class ProductsControllerTest
    {
        private readonly Mock<ProductsRepository> _mockRepository;
        private readonly ProductsController _controller;

        public ProductsControllerTest()
        {
            _mockRepository = new Mock<ProductsRepository>();
            _controller = new ProductsController(_mockRepository.Object);
        }

        [Fact]
        public void GetReport_ReturnsOkResult_WithExpectedMessage()
        {
            // Arrange
            var startDate = new DateTime(2023, 1, 1);
            var endDate = new DateTime(2023, 12, 31);
            var products = new List<ProductReportDomainModel>() {
                new ProductReportDomainModel
                {
                    Id = "1",
                    Name = "Product 1",
                    Entries = 10,
                    Exits = 5
                },
            };
            _mockRepository.Setup(repo => repo.GetReport(startDate, endDate)).Returns(products);

            // Act
            var result = _controller.GetReport(startDate, endDate) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
        }

        [Fact]
        public void UpdateProduct_ReturnsOkResult()
        {
            // Arrange
            var productUpdate = new ProductUpdateDomainModel
            {
                Id = "1",
                ActionType = "add",
                Quantity = 5
            };

            // Act
            var result = _controller.UpdateProduct(productUpdate) as OkResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            _mockRepository.Verify(repo => repo.UpdateProduct(productUpdate), Times.Once);
        }
    }
}